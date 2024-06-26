// eslint-disable-next-line react/prop-types
export function Animal({ type, name, age }) {
  return (
    <li className="p-2">
      <div
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="font-normal text-gray-700">
          {type} - {age} years old
        </p>
      </div>
    </li>
  );
}
