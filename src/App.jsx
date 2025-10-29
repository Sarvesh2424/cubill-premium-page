import React, { useState } from 'react';
import { Check, Upload, Send, TrendingUp, Sparkles } from 'lucide-react';
import download from './assets/download.png'

export default function App() {
  const features = [
    {
      icon: <Upload className="w-5 h-5" />,
      title: "Image Upload",
      description: "Add product images while creating invoices for a professional touch"
    },
    {
      icon: <Send className="w-5 h-5" />,
      title: "Send Invoice Totals",
      description: "Instantly share invoice summaries directly with your customers"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Today's Earnings",
      description: "Track your daily revenue at a glance with real-time insights"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="bg-[#1E3D59] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#17B978] rounded-lg flex items-center justify-center font-bold">
              Cu
            </div>
            <span className="text-xl font-semibold">CuBill</span>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.viruzverse.billbronew" target="_blank" rel="noopener noreferrer">
            <img 
              src={download}
              alt="Get it on Google Play" 
              className="h-15 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-[#FFD700] rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Premium Features
        </div>
        <h1 className="text-5xl font-bold text-[#1E3D59] mb-6">
          Elevate Your Billing Experience
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
          Unlock professional invoicing tools designed to streamline your business and impress your customers
        </p>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-white border-2 border-[#1E3D59] rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#1E3D59] mb-2">Premium</h3>
          <div className="mb-6">
            <span className="text-5xl font-bold text-[#1E3D59]">
              Rs. 79
            </span>
            <span className="text-slate-600 ml-2">
              /month
            </span>
          </div>
          <button className="w-full py-4 bg-[#17B978] text-white rounded-xl font-semibold text-lg hover:bg-[#15a569] transition-colors mb-8">
            Upgrade to Premium
          </button>
          <div className="text-left space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 bg-[#17B978]/10 text-[#17B978] rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <div className="font-semibold text-[#1E3D59]">{feature.title}</div>
                  <div className="text-sm text-slate-600">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1E3D59] text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-[#17B978]/10 text-[#17B978] rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1E3D59] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-[#1E3D59] mb-6">
          Ready to Go Premium?
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using CuBill Premium to create professional invoices
        </p>
        <button className="px-8 py-4 bg-[#17B978] text-white rounded-xl font-semibold text-lg hover:bg-[#15a569] transition-colors">
          Upgrade to Premium
        </button>
      </section>

      <footer className="bg-[#1E3D59] text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/80">© 2024 CuBill. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}