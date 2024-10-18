const name = "Rocío";

export function Heading() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{name}, ¿para quién deseas cotizar?</h1>
      <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
    </div>
  );
}
