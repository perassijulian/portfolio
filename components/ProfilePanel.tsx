import ContactLinks from "./ContactLinks";
import NavigationLinks from "./NavigationLinks";
import ProfileHeader from "./ProfileHeader";

export default function ProfilePanel() {
  return (
    <div className="md:h-screen md:fixed md:top-0 md:flex md:flex-col md:justify-between md:p-20 px-10 py-20 space-y-8">
      <div className="space-y-8">
        <ProfileHeader />
        <NavigationLinks />
      </div>
      <ContactLinks />
    </div>
  );
}
