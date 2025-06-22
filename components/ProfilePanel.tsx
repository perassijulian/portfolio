import ContactLinks from "./ContactLinks";
import NavigationLinks from "./NavigationLinks";
import ProfileHeader from "./ProfileHeader";

export default function ProfilePanel() {
  return (
    <div>
      <ProfileHeader />
      <NavigationLinks />
      <ContactLinks />
    </div>
  );
}
