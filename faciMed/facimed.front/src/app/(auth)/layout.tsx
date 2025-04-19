export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white w-screen h-screen flex">
      <section className="w-2/3 h-full p-4">
        <div className="bg-auth bg-cover bg-center w-full h-full rounded-lg"></div>
      </section>
      <section className="border w-1/3 h-full">{children}</section>
    </div>
  );
}
