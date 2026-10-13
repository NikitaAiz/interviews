// We have a list of users (100 users) that we want to do the same async operation on all of them
// The operation is a RestAPI call to an external service, the service can process only 10 requests at a time.
// Build a function that gets the users array, the function to execute and number of parallel requests to run.

// The function should run the requests in parallel
// and make sure that in any time all 10 operations are being executed in the external service

const parallelMap = async (users, functionToExecute, n = 10) => {

}