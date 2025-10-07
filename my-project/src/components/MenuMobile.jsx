export default function MenuMobile({ state }) {
  return (
    <>
      {state && (
        <div className="sm:hidden h-full w-full bg-amber-300"></div>
      )}
    </>
  );
}
