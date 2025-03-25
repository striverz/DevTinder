import React from "react";
import {
  UserPlus,
  MessageCircle,
  Globe,
  Award,
  Edit,
  MessageSquare,
} from "lucide-react";

const Feature = ({ icon: Icon, title, description }) => (
  <div className="bg-white-300 p-4 rounded-lg shadow-md flex items-start space-x-4">
    <Icon className="w-8 h-8 text-blue-600" />
    <div>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const AboutDevTinder = () => {
  return (
    <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg max-w-5xl mx-auto mt-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        About DevTinder
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        DevTinder is a platform built for developers to connect, collaborate,
        and grow together. Whether you're looking for teammates, mentors, or
        networking opportunities, DevTinder has you covered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Feature
          icon={UserPlus}
          title="Developer Matching"
          description="Find and connect with like-minded developers based on skills and interests."
        />
        <Feature
          icon={MessageCircle}
          title="Messaging & Requests"
          description="Send and receive connection requests, chat with matches, and collaborate."
        />

        <Feature
          icon={Globe}
          title="Global Networking"
          description="Connect with developers worldwide or filter by location for local collaborations."
        />
        <Feature
          icon={Award}
          title="Skill-Based Search"
          description="Filter developers by skills, experience, and availability to find the perfect match."
        />

        <Feature
          icon={Edit}
          title="Profile Editing"
          description="Customize and update your profile to showcase your skills and experience."
        />
        <Feature
          icon={MessageSquare}
          title="Real-Time Live Chat"
          description="Chat in real-time with other developers to discuss projects and opportunities."
        />
      </div>
    </div>
  );
};

export default AboutDevTinder;
