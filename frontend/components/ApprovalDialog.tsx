'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchResponse } from '@/types/profile';
import { Check, X } from 'lucide-react';

interface ApprovalDialogProps {
    profile: SearchResponse;
    isOpen: boolean;
    onApprove: () => void;
    onReject: () => void;
}

export default function ApprovalDialog({
    profile,
    isOpen,
    onApprove,
    onReject
}: ApprovalDialogProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        onClick={onReject}
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="glass-strong rounded-lg p-6 max-w-md w-full glow-border">
                            {/* Header */}
                            <div className="mb-4">
                                <h3 className="text-2xl font-orbitron font-bold glow-cyan mb-2">
                                    Save to Database?
                                </h3>
                                <p className="text-gray-400">
                                    Do you want to save this profile information to the database?
                                </p>
                            </div>

                            {/* Profile Summary */}
                            <div className="mb-6 p-4 glass rounded-lg border border-cyan-400/20">
                                <p className="text-cyan-400 font-semibold mb-2">{profile.name}</p>
                                <div className="space-y-1 text-sm text-gray-300">
                                    {profile.github_url && (
                                        <p>✓ GitHub profile found</p>
                                    )}
                                    {profile.instagram_url && (
                                        <p>✓ Instagram profile found</p>
                                    )}
                                    {profile.twitter_url && (
                                        <p>✓ X (Twitter) profile found</p>
                                    )}
                                    {profile.linkedin_url && (
                                        <p>✓ LinkedIn profile found</p>
                                    )}
                                    {profile.description && (
                                        <p>✓ Profile description available</p>
                                    )}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onApprove}
                                    className="flex-1 btn-jarvis bg-cyan-500/10 hover:bg-cyan-500/20 flex items-center justify-center gap-2"
                                >
                                    <Check className="w-5 h-5" />
                                    Save
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onReject}
                                    className="flex-1 btn-jarvis border-red-500 text-red-500 hover:bg-red-500/10 flex items-center justify-center gap-2"
                                >
                                    <X className="w-5 h-5" />
                                    Discard
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
