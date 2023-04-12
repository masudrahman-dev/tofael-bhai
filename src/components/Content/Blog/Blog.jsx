import React, { useContext } from "react";

const Blog = () => {
  return (
    <section>
      <div className="container px-5 mx-auto dark:text-slate-50">
        <h1 className="text-5xl text-center my-10">Blog page</h1>

        <div className="text-xl">
          <h1 className="my-7 text-2xl font-bold">
            When should you use context API?
          </h1>
          <p>
            Using Context Api we can pass data to multiple components with{" "}
            <em className="font-semibold">props drilling</em> here are some use
            case of context api.{" "}
          </p>
          <div className="flex flex-col gap-5">
            <p>
              <em className="font-semibold">Theme switching:</em>If your app
              lets the user change its appearance (e.g. dark mode), you can put
              a context provider at the top of your app, and use that context in
              components that need to adjust their visual look.
            </p>
            <p>
              <em className="font-semibold">Theme switching:</em>If you have a
              requirement to manage user authentication across your application,
              you can use the Context API to manage the user's authentication
              state. This way, you don't have to pass the authentication state
              down as a prop to each component.
            </p>
            <p>
              <em className="font-semibold">Routing:</em> If you have a
              requirement to manage the current route of your application, you
              can use the Context API to manage the current route across your
              entire application. This way, you don't have to pass the current
              route down as a prop to each component.
            </p>
            <p>
              <em className="font-semibold">Managing state</em>As your app
              grows, you might end up with a lot of state closer to the top of
              your app. Many distant components below may want to change it. It
              is common to use a reducer together with context to manage complex
              state and pass it down to distant components without too much
              hassle.
            </p>
          </div>

          <div>
            <div>
              <h1 className="my-7 text-2xl font-bold">
                What is a custom hook?
              </h1>
              <p>
                Custom React JS hooks are reusable functions that a React JS
                software developer can use to add special and unique
                functionality to the React applications. Custom hooks allow you
                to extract stateful logic from a component and reuse it in other
                components without duplicating code. Custom hooks work by using
                the built-in React hooks, such as useState, useEffect, and
                useContext. The custom hook can also accept arguments, just like
                a regular function. For example, let's say you have several
                components that need to fetch data from an API. You can create a
                custom hook called useFetch that uses the useState and useEffect
                hooks to fetch the data and manage the loading state. Then, you
                can use the useFetch hook in each component that needs to fetch
                data, instead of duplicating the code for fetching data in each
                component. Here's an example of a custom hook that fetches data:
              </p>
            </div>
            <div>
              <div className="  my-12">
                <img
                  className="rounded"
                  src="https://i.ibb.co/xMSBsfN/image.png"
                  alt=""
                />
              </div>
              <p>
                To use this custom hook in a component, you would import it and
                call it like any other React hook:
              </p>
              <div className="  my-12">
                <img
                  className="rounded"
                  src="https://i.ibb.co/1TNQ65t/image.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="my-7 text-2xl font-bold">What is useRef?</h1>
              <p>
                useRef is a hook that returns a mutable ref object. The ref
                object can be used to access a DOM element or a value that
                persists across component renders without triggering a
                re-render. The useRef hook takes an initial value as an argument
                and returns a ref object with a current property that points to
                the current value of the ref. You can update the value of the
                ref using the current property, and the component will not
                re-render. Here's an example of using useRef to access a DOM
                element:
              </p>
            </div>

            <div className="  my-12">
              <img
                className="rounded"
                src="https://i.ibb.co/frYNNqL/image.png"
                alt=""
              />
            </div>
            <p>
              In this example, the inputRef ref object is created using useRef,
              and it is passed to the ref prop of the element. When the user
              clicks the "Focus input" button, the handleClick function is
              called, which uses the current property of the inputRef to access
              the DOM element and call its focus method. useRef can also be used
              to persist a value across component renders. Here's an example:
              javascript Copy code
            </p>
            <div className="  my-12">
              <img
                className="rounded"
                src="https://i.ibb.co/5s2cKth/image.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div>
              <h1 className="my-7 text-2xl font-bold">What is useMemo?</h1>
              <p>
                useRef is a hook that returns a mutable ref object. The ref
                object can be used to access a DOM element or a value that
                persists across component renders without triggering a
                re-render. The useRef hook takes an initial value as an argument
                and returns a ref object with a current property that points to
                the current value of the ref. You can update the value of the
                ref using the current property, and the component will not
                re-render. Here's an example of using useRef to access a DOM
                element:
              </p>
            </div>
            <div className="  my-12">
              <img
                className="rounded"
                src="https://i.ibb.co/BLnjq6X/image.png"
                alt=""
              />
            </div>
            <p>
              In this example, the inputRef ref object is created using useRef,
              and it is passed to the ref prop of the element. When the user
              clicks the "Focus input" button, the handleClick function is
              called, which uses the current property of the inputRef to access
              the DOM element and call its focus method. useRef can also be used
              to persist a value across component renders. Here's an example:
            </p>
            <div className="  my-12">
              <img
                className="rounded"
                src="https://i.ibb.co/7j82dnq/image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
