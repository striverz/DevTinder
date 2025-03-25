import { Code, Users, MessageSquare, Terminal } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="bg-white py-12 flex justify-center">
      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
          <Users className="text-indigo-600 w-8 h-8 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-900">
            Developer Matching
          </h3>
          <p className="text-gray-600 mt-2">
            Find and connect with like-minded developers based on skills and
            interests
          </p>
          <p className="text-gray-900 font-semibold mt-2">
            1k+ Active Developers
          </p>
        </div>

        {/* Technical Writing */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
          <Terminal className="text-indigo-600 w-8 h-8 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-900">
            Customized Profile Editing
          </h3>
          <p className="text-gray-600 mt-2">
            Customize and update your profile to showcase your skills and
            experience.
          </p>
          <p className="text-gray-900 font-semibold mt-2">2k+ Total Users</p>
        </div>

        {/* Code Snippets */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
          <MessageSquare className="text-indigo-600 w-8 h-8 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-900">
            Real-Time Live Chat
          </h3>
          <p className="text-gray-600 mt-2">
            Chat in real-time with other developers to discuss projects and
            opportunities.
          </p>
          <p className="text-gray-900 font-semibold mt-2">
            100+ Daily Requests
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
