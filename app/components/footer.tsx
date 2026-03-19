"use client";
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {year || "2024"} Jeevan Mahesha. Passion for Design-to-Code.
        </p>
      </div>
    </footer>
  );
}
