import ContactLinks from "./ContactLinks";
import NavigationLinks from "./NavigationLinks";
import ProfileHeader from "./ProfileHeader";

export default function ProfilePanel() {
  return (
    <div className="md:fixed top-0 md:p-20 px-10 py-20">
      <ProfileHeader />
      <NavigationLinks />
      <ContactLinks />
    </div>
  );
}
