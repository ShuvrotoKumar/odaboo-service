"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Image as ImageIcon, Send, Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

// --- Animation Variants ---
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

// --- Mock Data for Feed ---
const FEED_POSTS = [
    {
        id: 1,
        author: {
            name: "Sarah Jenkins",
            role: "Verified Client",
            avatar: "SJ"
        },
        time: "2 hours ago",
        content: "Just hired a fantastic electrician through Odaboo for my kitchen renovation. The process was so seamless and the work is top-notch! Highly recommend checking out the verified professionals here.",
        likes: 24,
        comments: 5,
        isLiked: true
    },
    {
        id: 2,
        author: {
            name: "Michael Chen",
            role: "Pro Plumber",
            avatar: "MC"
        },
        time: "5 hours ago",
        content: "Another successful pipe replacement completed today. Remember folks, preventative maintenance on your home plumbing can save you thousands in the long run. Feel free to book a consultation through my profile!",
        likes: 56,
        comments: 12,
        isLiked: false
    },
    {
        id: 3,
        author: {
            name: "Elena Rodriguez",
            role: "Looking for Services",
            avatar: "ER"
        },
        time: "1 day ago",
        content: "Does anyone have recommendations for a reliable landscape designer in the metro area? Looking to completely overhaul my backyard before summer starts. Needs to be pet-friendly!",
        likes: 18,
        comments: 8,
        isLiked: false
    }
];

export default function FeedPage() {
    const [newPost, setNewPost] = useState("");

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20">
            <Container>
                <div className="max-w-2xl mx-auto">

                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Community Feed</h1>
                        <p className="text-slate-500 mt-2">See what professionals and clients are sharing.</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-6"
                    >
                        {/* Create Post Input */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200"
                        >
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">
                                    ME
                                </div>
                                <div className="flex-grow">
                                    <textarea
                                        value={newPost}
                                        onChange={(e) => setNewPost(e.target.value)}
                                        placeholder="Ask for recommendations or share an update..."
                                        className="w-full bg-slate-50 rounded-xl border-none p-4 text-slate-900 focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all resize-none min-h-[100px]"
                                    />
                                    <div className="flex items-center justify-between mt-4">
                                        <button className="flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors px-3 py-2 rounded-lg hover:bg-purple-50">
                                            <ImageIcon className="w-5 h-5" />
                                            <span className="text-sm font-medium">Photo</span>
                                        </button>
                                        <button
                                            className={cn(
                                                "flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all",
                                                newPost.length > 0
                                                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20 hover:bg-purple-700"
                                                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                                            )}
                                        >
                                            <span>Post</span>
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feed Posts */}
                        {FEED_POSTS.map((post) => (
                            <motion.div
                                key={post.id}
                                variants={fadeInUp}
                                className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 transition-shadow hover:shadow-md"
                            >
                                {/* Post Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-purple-100 text-slate-700 flex items-center justify-center font-bold text-lg">
                                            {post.author.avatar}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">{post.author.name}</h3>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <span className={cn(
                                                    "font-medium",
                                                    post.author.role.includes("Pro") ? "text-purple-600" : ""
                                                )}>
                                                    {post.author.role}
                                                </span>
                                                <span>•</span>
                                                <span>{post.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-slate-400 hover:text-slate-600 p-2">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Post Content */}
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    {post.content}
                                </p>

                                {/* Post Actions */}
                                <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                                    <button className={cn(
                                        "flex items-center gap-2 text-sm font-medium transition-colors group",
                                        post.isLiked ? "text-red-500" : "text-slate-500 hover:text-red-500"
                                    )}>
                                        <Heart className={cn("w-5 h-5 transition-transform group-active:scale-75", post.isLiked && "fill-current")} />
                                        <span>{post.likes}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-cyan-600 transition-colors">
                                        <MessageCircle className="w-5 h-5" />
                                        <span>{post.comments}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors ml-auto">
                                        <Share2 className="w-5 h-5" />
                                        <span className="hidden sm:inline">Share</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}

                    </motion.div>
                </div>
            </Container>
        </div>
    );
}

