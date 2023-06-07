import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";
import UserHero from "@/components/user/UserHero";
import Userio from "@/components/user/Userio";
import useUser from "@/hook/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const UserView = () => {
  const router = useRouter();

  const { userId } = router.query;

  //   console.log(userId);
  const { data: fetchedUser, isLoading } = useUser(userId as string);
  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }
  return (
    <>
      <Header label={fetchedUser?.name} showBackArrow />
      <UserHero userId={userId as string} />
      <Userio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
  );
};

export default UserView;
