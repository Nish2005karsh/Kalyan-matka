"use client";

import { useEffect, useRef } from "react";
import {
  Menu,
  Wallet,
  Bell,
  Plus,
  Play,
  Home,
  Gamepad2,
  Receipt,
  Clock,
  User,
  Send,
  MessageCircle,
  ArrowUpCircle,
  ArrowDownCircle,
  ChevronRight,
} from "lucide-react";

// const games = [
//   { name: "TextBazaar", number: "1-**-**", open: "04:12 PM", close: "05:18 PM", soon: true },
//   { name: "TestingBazaarr", number: "1-**-**", open: "05:15 PM", close: "05:50 PM", soon: true },
//   { name: "bbbbb", number: "6-**-**", open: "05:21 PM", close: "05:50 PM", soon: true },
//   { name: "DecIllll", number: "6-**-**", open: "06:01 PM", close: "07:00 PM", soon: true },
//   { name: "Json123", number: "9-97-7", open: "10:10 PM", close: "11:00 PM", soon: true },
//   { name: "llalsdnIndl", number: "3-**-**", open: "09:20 PM", close: "11:45 PM", soon: true },
// ];

// function Marquee() {
//   const marqueeRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const el = marqueeRef.current;
//     if (!el) return;
//     let animationId: number;
//     let pos = 0;
//     const speed = 0.5;

//     const animate = () => {
//       pos -= speed;
//       const firstChild = el.firstElementChild as HTMLElement;
//       if (firstChild && Math.abs(pos) >= firstChild.offsetWidth) {
//         pos += firstChild.offsetWidth;
//         el.appendChild(firstChild);
//       }
//       el.style.transform = `translateX(${pos}px)`;
//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   const text = "WELCOME TO Kalyan Matka 3D";
//   const separator = "  •  ";
//   const items = Array(6).fill(text + separator);

//   return (
//     <div className="overflow-hidden bg-white py-1.5 border-y border-gray-100">
//       <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
//         {items.map((item, i) => (
//           <span
//             key={i}
//             className="text-[10px] font-bold tracking-[0.15em] text-amber-500 uppercase shrink-0 px-1"
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <style>{`
        :root {
          --brand: #f59e0b;
          --brand-dark: #d97706;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Phone shell */}
      <div
        className="rounded-[2.5rem] p-[10px] shadow-2xl"
        style={{
          background: "linear-gradient(160deg, #2a2a2a, #000)",
          boxShadow: "0 40px 70px -20px rgba(0,0,0,0.55)",
        }}
      >
        <div
          className="rounded-[2rem] overflow-hidden bg-[#FF9800] relative"
          style={{ height: 640 }}
        >
          {/* Screenshot Image with Cropping */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/app/Screenshot_20260506_125115.jpg.jpeg"
              alt="App Screenshot"
              className="w-full h-[112%] object-cover"
              style={{
                marginTop: "-8%", // Crop top
                marginBottom: "-6%", // Crop bottom
              }}
            />
          </div>

          {/* Camera Cutout - Small circle instead of a large notch */}
          <div className="relative flex justify-center pt-3 pb-1 z-20 pointer-events-none">
            <div className="w-3 h-3 bg-black rounded-full opacity-80" />
          </div>

          {/* 
          {/* Header }
          <div className="flex items-center justify-between px-4 py-2.5 bg-white">
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Menu className="w-4 h-4 text-gray-600" strokeWidth={2} />
            </button>

            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm tracking-wide text-gray-900">
                KALYAN MATKA
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold">
                <span>₹100.00</span>
              </div>
              <button className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                <ArrowDownCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Marquee }
          <Marquee />

          {/* Social Icons Row }
          <div className="flex items-center justify-around px-4 py-3 bg-white">
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center shadow-sm">
                <Send className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="text-[8px] font-bold text-gray-500 tracking-wide">TELEGRAM</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center shadow-sm">
                <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="text-[8px] font-bold text-gray-500 tracking-wide">WHATSAPP</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shadow-sm">
                <Plus className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <span className="text-[8px] font-bold text-gray-500 tracking-wide">ADD POINTS</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-sm">
                <ArrowUpCircle className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="text-[8px] font-bold text-gray-500 tracking-wide">WITHDRAW</span>
            </button>
          </div>

          {/* Game List }
          <div
            className="overflow-y-auto hide-scrollbar px-3 pb-20"
            style={{ height: 420 }}
          >
            {games.map((g) => (
              <div
                key={g.name}
                className="mb-2.5 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="px-3.5 py-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-extrabold text-[13px] text-gray-900">
                          {g.name}
                        </span>
                        {g.soon && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500 text-white text-[8px] font-extrabold tracking-wide">
                            SOON
                          </span>
                        )}
                      </div>
                      <div className="font-extrabold text-[20px] text-amber-500 leading-tight tracking-wide mb-1">
                        {g.number}
                      </div>
                      <div className="text-[9px] text-gray-400 font-medium">
                        {g.open} - {g.close}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <button className="text-[9px] font-bold text-amber-500 tracking-wide hover:underline">
                        CHARTS
                      </button>
                      <button className="px-5 py-1.5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold tracking-wide shadow-sm active:scale-95 transition-transform">
                        PLAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Nav }
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around px-2 pt-2 pb-5 z-20">
            <button className="flex flex-col items-center gap-0.5 min-w-[50px]">
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center -mt-5 border-4 border-white shadow-lg">
                <Home className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="text-[8px] font-bold text-gray-900">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 min-w-[50px] text-gray-400">
              <Gamepad2 className="w-5 h-5" strokeWidth={1.8} />
              <span className="text-[8px] font-medium">Games</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 min-w-[50px] text-gray-400">
              <Receipt className="w-5 h-5" strokeWidth={1.8} />
              <span className="text-[8px] font-medium">Funds</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 min-w-[50px] text-gray-400">
              <Clock className="w-5 h-5" strokeWidth={1.8} />
              <span className="text-[8px] font-medium">History</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 min-w-[50px] text-gray-400">
              <User className="w-5 h-5" strokeWidth={1.8} />
              <span className="text-[8px] font-medium">Profile</span>
            </button>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}