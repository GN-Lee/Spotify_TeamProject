import Image from "next/image";

const Recommendation = () => {
  return (
    <div className="relative">
      <Image
        src={"/user.jpg"}
        alt="Album Background"
        width={343}
        height={253}
        className="object-cover rounded-lg w-sm h-[270px]"
        // style={{
        //   width: "343px",
        //   height: "270px",
        // }}
      />
      {/* 검정 오버레이 */}
      <div className=" absolute inset-0 bg-black/20"></div>

      {/* 말풍선 */}
      <div
        className="absolute top-5 left-5 flex items-center bg-white rounded-full shadow-lg px-3 py-1 z-20 w-3xs
"
      >
        <Image
          src={"/user.jpg"}
          alt="Album Icon"
          width={19}
          height={19}
          className="rounded-full"
        />
        <p className="ml-2 text-black text-sm font-semibold">
          앨범을 향한 문구
        </p>
      </div>

      {/* 앨범 정보 */}
      <div className="absolute bottom-5 left-5 flex items-center space-x-3 z-20">
        <Image
          src={"/user.jpg"}
          alt="Album Cover"
          width={75}
          height={75}
          className="rounded-lg"
        />
        <div className="text-white">
          <p className="text-lg">앨범이름</p>
          <p className="text-sm">앨범</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
