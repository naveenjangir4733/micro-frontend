declare module "profile/Profile" {
  import type { ComponentType } from "react";

  const Profile: ComponentType;
  export default Profile;
}

declare module "blog/Blog" {
  export function mount(container: Element): void;
  export function unmount(): void;
}
