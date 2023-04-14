export default function() {
    return (
        <div role="status" className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-500 md:p-6">
          <div className="flex items-center justify-between">
              <div className="w-full">
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 w-24 mb-2.5"></div>
                  <div className="w-4/5 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
              </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="w-full">
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 w-24 mb-2.5"></div>
                  <div className="w-4/12 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
              </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="w-full">
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 w-24 mb-2.5"></div>
                  <div className="w-4/6 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
              </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="w-full">
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 w-24 mb-2.5"></div>
                  <div className="w-4/5 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
              </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
    );
}