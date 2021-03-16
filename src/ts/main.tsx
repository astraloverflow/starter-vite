import 'preact/debug';
import { render } from 'preact';
import { useState, useCallback } from 'preact/hooks';

function App() {
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return (
    <div class="p-4 bg-white rounded-lg shadow">
      <h1 class="text-5xl">Hello World</h1>
      <p class="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        <strong>Times button Has been clicked:</strong> {value}
      </p>
      <button class="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

render(<App />, document.querySelector('#app')!);
