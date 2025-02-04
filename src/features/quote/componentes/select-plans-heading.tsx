const name = "Rocío";

export function SelectPlansHeading() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold md:text-center md:text-4xl">
        {name}, ¿para quién deseas cotizar?
      </h1>
      <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
    </div>
  );
}
