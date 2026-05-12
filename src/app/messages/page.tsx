"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Search,
    Send,
    MoreVertical,
    Phone,
    Video,
    Paperclip,
    Smile,
    CheckCheck,
    ArrowLeft,
    Plus,
    Circle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

// Dummy Data
const CONVERSATIONS = [
    {
        id: "1",
        name: "Jessica Miller",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        lastMessage: "I'll be there by 10 AM tomorrow.",
        time: "10:30 AM",
        unread: 2,
        online: true,
        typing: false
    },
    {
        id: "2",
        name: "David Smith",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
        lastMessage: "The cleaning was excellent, thank you!",
        time: "Yesterday",
        unread: 0,
        online: false,
        typing: false
    },
    {
        id: "3",
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
        lastMessage: "Can we reschedule the plumbing task?",
        time: "Oct 12",
        unread: 0,
        online: true,
        typing: true
    }
];

const MESSAGES = [
    { id: 1, text: "Hi! I'm interested in your home cleaning service.", sent: false, time: "10:00 AM" },
    { id: 2, text: "Hello! I'd be happy to help. What date are you looking for?", sent: true, time: "10:05 AM" },
    { id: 3, text: "I was thinking this Friday morning.", sent: false, time: "10:10 AM" },
    { id: 4, text: "Friday works for me. I'll be there by 10 AM tomorrow.", sent: true, time: "10:30 AM" }
];

export default function MessagesPage() {
    const [selectedChat, setSelectedChat] = useState(CONVERSATIONS[0]);
    const [message, setMessage] = useState("");
    const [showSidebar, setShowSidebar] = useState(true);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;
        setMessage("");
    };

    return (
        <div className="min-h-screen bg-white pt-[85px] pb-0 h-screen flex flex-col overflow-hidden">
            <div className="flex-grow flex h-full pb-4 px-4 md:px-8 lg:px-12 max-w-[1370px] mx-auto w-full">
                <div className="bg-white rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex overflow-hidden flex-grow relative w-full h-full">

                    {/* Sidebar */}
                    <div className={cn(
                        "w-full md:w-80 lg:w-[400px] border-r border-slate-100 flex flex-col transition-all duration-300 z-30 bg-white",
                        !showSidebar && "hidden md:flex"
                    )}>
                        <div className="p-8 pb-4">
                            <div className="flex items-center justify-between mb-8">
                                <h1 className="text-3xl font-black text-slate-800 tracking-tight">Messages</h1>
                                <button className="w-10 h-10 rounded-2xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search chats..."
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border-none rounded-2xl text-[14px] font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white transition-all placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto px-4 py-2 custom-scrollbar">
                            {CONVERSATIONS.map((chat) => (
                                <button
                                    key={chat.id}
                                    onClick={() => {
                                        setSelectedChat(chat);
                                        if (window.innerWidth < 768) setShowSidebar(false);
                                    }}
                                    className={cn(
                                        "w-full flex items-center gap-4 p-5 rounded-[2rem] transition-all mb-2 group relative",
                                        selectedChat.id === chat.id
                                            ? "bg-slate-900 text-white shadow-xl shadow-slate-200"
                                            : "hover:bg-slate-50"
                                    )}
                                >
                                    <div className="relative shrink-0">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all",
                                            selectedChat.id === chat.id ? "border-white/20" : "border-white shadow-md"
                                        )}>
                                            <Image src={chat.avatar} alt={chat.name} width={56} height={56} className="object-cover w-full h-full" />
                                        </div>
                                        {chat.online && (
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                        )}
                                    </div>
                                    <div className="flex-grow text-left overflow-hidden">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className={cn(
                                                "font-black text-base truncate tracking-tight",
                                                selectedChat.id === chat.id ? "text-white" : "text-slate-800"
                                            )}>{chat.name}</span>
                                            <span className={cn(
                                                "text-[10px] font-bold",
                                                selectedChat.id === chat.id ? "text-white/60" : "text-slate-400"
                                            )}>{chat.time}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className={cn(
                                                "text-[13px] truncate max-w-[180px] font-medium",
                                                selectedChat.id === chat.id ? "text-white/80" : "text-slate-500"
                                            )}>
                                                {chat.typing ? (
                                                    <span className="text-primary font-bold italic">Typing...</span>
                                                ) : chat.lastMessage}
                                            </p>
                                            {chat.unread > 0 && selectedChat.id !== chat.id && (
                                                <span className="bg-primary text-white text-[10px] font-black px-2 py-1 rounded-lg">
                                                    {chat.unread}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-grow flex flex-col bg-white relative z-20 h-full overflow-hidden">

                        {/* Header */}
                        <div className="p-6 md:px-8 border-b border-slate-50 flex items-center justify-between bg-white/90 backdrop-blur-xl sticky top-0 z-10">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setShowSidebar(true)}
                                    className="md:hidden w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-2xl transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5 text-slate-800" />
                                </button>
                                <div className="relative shrink-0">
                                    <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                                        <Image src={selectedChat.avatar} alt={selectedChat.name} width={48} height={48} className="object-cover w-full h-full" />
                                    </div>
                                    <div className={cn(
                                        "absolute -bottom-1 -right-1 w-3.5 h-3.5 border-2 border-white rounded-full",
                                        selectedChat.online ? "bg-green-500" : "bg-slate-300"
                                    )}></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-800 leading-tight">{selectedChat.name}</h3>
                                    <div className="flex items-center gap-1.5">
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                            {selectedChat.online ? "Active Now" : "Offline"}
                                        </p>
                                        {selectedChat.online && <Circle className="w-1.5 h-1.5 fill-green-500 text-green-500" />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="w-11 h-11 flex items-center justify-center hover:bg-slate-50 rounded-2xl text-slate-400 hover:text-primary transition-all">
                                    <Phone className="w-5 h-5" />
                                </button>
                                <button className="w-11 h-11 flex items-center justify-center hover:bg-slate-50 rounded-2xl text-slate-400 hover:text-primary transition-all">
                                    <Video className="w-5 h-5" />
                                </button>
                                <button className="w-11 h-11 flex items-center justify-center hover:bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-800 transition-all">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-8 space-y-8 custom-scrollbar bg-slate-50/20">
                            {MESSAGES.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    key={msg.id}
                                    className={cn(
                                        "flex flex-col max-w-[80%] md:max-w-[65%]",
                                        msg.sent ? "ml-auto items-end" : "mr-auto items-start"
                                    )}
                                >
                                    <div className={cn(
                                        "px-6 py-4 text-[15px] leading-relaxed shadow-sm font-medium",
                                        msg.sent
                                            ? "bg-slate-900 text-white rounded-[2rem] rounded-tr-none shadow-xl shadow-slate-100"
                                            : "bg-white text-slate-700 rounded-[2rem] rounded-tl-none border border-slate-100"
                                    )}>
                                        {msg.text}
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 px-2">
                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-wider">{msg.time}</span>
                                        {msg.sent && <CheckCheck className="w-3.5 h-3.5 text-primary" />}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-8 bg-white border-t border-slate-50">
                            <form
                                onSubmit={handleSendMessage}
                                className="flex items-center gap-4 bg-slate-50/50 p-2 pl-4 rounded-[2rem] border border-slate-100 focus-within:bg-white focus-within:shadow-xl focus-within:shadow-slate-100 transition-all"
                            >
                                <button type="button" className="p-3 text-slate-400 hover:text-primary transition-colors">
                                    <Paperclip className="w-5 h-5" />
                                </button>
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-grow bg-transparent border-none focus:ring-0 text-[15px] font-bold py-3 text-slate-800 placeholder:text-slate-400 outline-none"
                                />
                                <div className="flex items-center gap-2">
                                    <button type="button" className="p-3 text-slate-400 hover:text-primary transition-colors hidden sm:block">
                                        <Smile className="w-5 h-5" />
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-[#17b9c1] hover:bg-[#12949a] text-white w-14 h-14 rounded-2xl shadow-xl shadow-[#17b9c1]/30 transition-all flex items-center justify-center scale-95 hover:scale-100 active:scale-95"
                                    >
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #f1f5f9;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #e2e8f0;
                }
            `}</style>
        </div>
    );
}
