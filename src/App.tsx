/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";
import { FacilitySection } from "./components/FacilitySection";
import { ServiceSection } from "./components/ServiceSection";
import { AdmissionSection } from "./components/AdmissionSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { KakaoConsultModal } from "./components/KakaoConsultModal";
import { VisitBookingModal } from "./components/VisitBookingModal";
import { PhotoLightbox } from "./components/PhotoLightbox";
import { FloatingConsultBar } from "./components/FloatingConsultBar";

export default function App() {
  const [isKakaoOpen, setIsKakaoOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<{
    src: string;
    title: string;
    desc: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1E2C25] flex flex-col font-sans-clean antialiased selection:bg-[#F4ECE0] selection:text-[#2C3E35] pb-20 overflow-x-hidden">
      {/* 1. Header & Navigation */}
      <Header
        onOpenKakao={() => setIsKakaoOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onOpenKakao={() => setIsKakaoOpen(true)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 3. 엄마 이야기 (Brand Story & 3 Connections & Care Philosophies) */}
        <StorySection />

        {/* 4. 시설 안내 (Facility & Floor Guide B1F~4F & Gallery) */}
        <FacilitySection
          onOpenPhotoLightbox={(photo) => setLightboxPhoto(photo)}
        />

        {/* 5. 서비스 안내 (Medical, Nursing, Rehab, Meals, Dementia, Activities) */}
        <ServiceSection />

        {/* 6. 입소 안내 (Admission, Grade Assistance, 5-Step Process, 12-Item Checklist) */}
        <AdmissionSection
          onOpenKakao={() => setIsKakaoOpen(true)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 7. 오시는 길 & B2B 배너 (Location, Transport, Cura System) */}
        <LocationSection onOpenKakao={() => setIsKakaoOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* 8. Fixed Floating Bar */}
      <FloatingConsultBar
        onOpenKakao={() => setIsKakaoOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Interactive Modals */}
      <KakaoConsultModal
        isOpen={isKakaoOpen}
        onClose={() => setIsKakaoOpen(false)}
      />

      <VisitBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <PhotoLightbox
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
      />
    </div>
  );
}
