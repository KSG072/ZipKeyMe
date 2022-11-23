interface TextAreaProps {
  label?: string;
  name?: string;
  [key: string]: any;
}

export default function Textarea({ label, name, ...rest }: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className="mt-1 shadow-sm w-full focus:ring-pantone rounded-md border-gray-300 focus:border-pantone "
        rows={4}
        {...rest}
      />
    </div>
  );
}
