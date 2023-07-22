

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mockup-code">
        <pre data-prefix="$"><code>npm i daisyui</code></pre>
        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
      </div>
      <button
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
      <div className="mockup-window border border-base-300">
        <div className="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
      </div>
      <div className="radial-progress" style={{ "--value": 80 }}>80%</div>
      <div className="radial-progress text-primary" style={{ "--value": 90 }}>90</div>
    </main>
  )
}
