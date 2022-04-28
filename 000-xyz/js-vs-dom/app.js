

const app = document.querySelector('#app');

const DOMTask = async () => {
  const start = Date.now();
  console.log('\nstart =', start);
  for (let i = 0; i < 10000; i++) {
    app.insertAdjacentHTML('beforeend', `<p>i =${i}</p>`)
  }
  const end = Date.now();
  console.log('end =', end);
  console.log('end - start =', end - start);
}

const TestDOM = async () => {
  // Record the time immediately before running a task.
  performance.mark('domTask:start');
  await DOMTask();
  // Record the time immediately after running a task.
  performance.mark('domTask:end');
  // Measure the delta between the start and end of the task
  performance.measure('domTask', 'domTask:start', 'domTask:end');
}


const JSTask = async () => {
  // const arr = ``;
  let html = ``;
  const start = Date.now();
  console.log('\nstart =', start);
  for (let i = 0; i < 10000; i++) {
    html += `<p>i =${i}</p>`;
    // arr.push(`<p>i =${i}</p>`);
  }
  // app.insertAdjacentHTML('beforeend', html);
  // console.log('html =', html);
  const end = Date.now();
  console.log('end =', end);
  console.log('end - start =', end - start);
}

const TestJS = async () => {
  // Record the time immediately before running a task.
  performance.mark('jsTask:start');
  await JSTask();
  // Record the time immediately after running a task.
  performance.mark('jsTask:end');
  // Measure the delta between the start and end of the task
  performance.measure('jsTask', 'jsTask:start', 'jsTask:end');
}

try {
  // Create the performance observer.
  const po = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log the entry and all associated details.
      console.log('performance observer =', entry.toJSON(), entry);
    }
  });
  // Start listening for `measure` entries to be dispatched.
  po.observe({type: 'measure', buffered: true});
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}

// TestDOM();

// TestJS();
