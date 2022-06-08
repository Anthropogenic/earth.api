export default function SectionContainer({
  children,
  parentClassName,
  childClassName,
}) {
  return (
    <>
      {/* @FIX: PASS IN CLASS PROPS */}
      <div className={`flex flex-wrap ${parentClassName}`}>
        <div className={`max-w-screen-xl mx-4 xl:mx-auto ${childClassName}`}>
          {children}
        </div>
      </div>
    </>
  );
}
