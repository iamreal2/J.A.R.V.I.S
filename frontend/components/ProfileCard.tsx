'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SearchResponse } from '@/types/profile';
import { Github, Instagram, Twitter, Linkedin, User, Users } from 'lucide-react';

interface ProfileCardProps {
    profile: SearchResponse;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
    const socialLinks = [
        { icon: Github, url: profile.github_url, label: 'GitHub' },
        { icon: Instagram, url: profile.instagram_url, label: 'Instagram' },
        { icon: Twitter, url: profile.twitter_url, label: 'X (Twitter)' },
        { icon: Linkedin, url: profile.linkedin_url, label: 'LinkedIn' },
    ].filter(link => link.url);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-lg p-6 glow-border"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-orbitron font-bold glow-cyan">
                        {profile.name}
                    </h3>
                    <p className="text-cyan-400/60 text-sm">Profile Analysis</p>
                </div>
            </div>

            {/* AI Response */}
            {profile.ai_response && (
                <div className="mb-4 p-4 glass rounded-lg border border-cyan-400/20">
                    <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
                        {profile.ai_response}
                    </p>
                </div>
            )}

            {/* Description */}
            {profile.description && (
                <div className="mb-4">
                    <h4 className="text-cyan-400 font-orbitron text-sm mb-2">Summary</h4>
                    <p className="text-gray-300">{profile.description}</p>
                </div>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
                <div className="mb-4">
                    <h4 className="text-cyan-400 font-orbitron text-sm mb-3">Social Profiles</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {socialLinks.map(({ icon: Icon, url, label }) => (
                            <motion.a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-3 glass rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm text-gray-300">{label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            )}

            {/* Similar Profiles */}
            {profile.similar_profiles && profile.similar_profiles.length > 0 && (
                <div>
                    <h4 className="text-cyan-400 font-orbitron text-sm mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Similar Profiles
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {profile.similar_profiles.map((name, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 glass rounded-full text-sm text-cyan-300 border border-cyan-400/30"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
