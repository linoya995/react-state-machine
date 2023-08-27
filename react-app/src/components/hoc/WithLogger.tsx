import { useEffect, FC } from "react";

/**
 * With logger (HOC) to add logging functionality
 * Log data on component mount ,unmount and update.
 * @param WrappedComponent - to be wrapped by logger.
 */
const withLogger = (WrappedComponent: FC) => {
  const WithLogger = (props: {}) => {
    // mount
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted.`);
      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted.`);
      };
    }, []);

    // update
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} updated.`);
    });

    return <WrappedComponent {...props} />;
  };

  return WithLogger;
};

export default withLogger;
