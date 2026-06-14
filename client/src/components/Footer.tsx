/**
 * Footer Component
 * Neo-brutalist cyberpunk minimalist footer
 * 
 * Design: Simple solid black baseline spacer
 */

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[#333333] py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p 
          className="text-sm text-[#999999] font-medium"
          style={{ fontFamily: "'Plus Jakarta Sans'" }}
        >
          © 2024 Creative Designer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
