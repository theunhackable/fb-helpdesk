
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className='max-w-[1000px] my-10 mx-auto'>
        {children}
      </main>
    </>
  );
}
