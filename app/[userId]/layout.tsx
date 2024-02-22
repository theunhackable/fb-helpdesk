
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="w-full ml-20">
        {children}
      </main>
    </>
  );
}
