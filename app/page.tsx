export const metadata = {
  title: "Novexa AB",
  description: "Välkommen till vår hemsida",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
