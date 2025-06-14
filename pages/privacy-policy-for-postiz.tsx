import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      className="privacy-policy"
      style={{
        color: "white",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Privacy Policy for Postize Instagram Integration</h1>

      <p>
        This Privacy Policy explains how your personal information is handled
        when using this app in connection with Instagram via Postize.
      </p>

      <h2>1. Information Collected</h2>
      <p>
        This application may access the following information from your
        Instagram account via the Instagram API (through Postize):
      </p>
      <ul>
        <li>
          Instagram profile information (such as username and profile picture)
        </li>
        <li>Media (photos, videos, and captions)</li>
        <li>Insights and engagement data (if available)</li>
      </ul>
      <p>
        No data is collected beyond what is required to connect your Instagram
        account to the app.
      </p>

      <h2>2. Use of Information</h2>
      <p>
        The data accessed is used solely for the purpose of managing and
        interacting with your Instagram content through Postize. This includes:
      </p>
      <ul>
        <li>Scheduling posts</li>
        <li>Viewing and managing media</li>
        <li>Viewing engagement insights</li>
      </ul>
      <p>No data is shared, sold, or transferred to third parties.</p>

      <h2>3. Data Storage</h2>
      <p>
        All data accessed is processed through Postize and is not stored or
        retained outside the platform. Please refer to Postize&apos;s Privacy
        Policy for details on how they manage your data.
      </p>

      <h2>4. User Control</h2>
      <p>You can revoke access to your Instagram data at any time by:</p>
      <ul>
        <li>Disconnecting the Instagram integration from within Postize</li>
        <li>
          Removing the app from your connected apps in your Facebook/Instagram
          settings
        </li>
      </ul>

      <h2>5. Changes to This Policy</h2>
      <p>
        This Privacy Policy may be updated occasionally. Continued use of the
        app after any changes constitutes your agreement to the revised policy.
      </p>

      <h2>6. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact me
        at:
      </p>
      <address>
        <strong>Name:</strong> Mohammed Yasin Mulla
        <br />
        <strong>Email:</strong>{" "}
        <a
          href="mailto:yasinspy1999@gmail.com"
          style={{ color: "white", textDecoration: "underline" }}
        >
          yasinspy1999@gmail.com
        </a>
      </address>
    </div>
  );
}
