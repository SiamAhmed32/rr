const TALENT_TAGS = [
  { label: "Python Dev", width: 93 },
  { label: "Javascript", width: 88 },
  { label: "Front End", width: 81 },
  { label: "Back End", width: 76 },
  { label: "IOS Development", width: 129 },
  { label: "+12", width: 40 },
];

function ShowcaseArtwork() {
  return (
    <div
      className="relative h-[454px] w-[451px] shrink-0"
      role="img"
      aria-label="RemoteRecruit custom talent profile with video, client feedback, and skill tags"
    >
      <img
        src="/showcase/Rectangle 9.png"
        alt=""
        width={555}
        height={651}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-[-20px] top-[-57px] h-[651px] w-[555px] max-w-none"
      />

      <img
        src="/talents/Rectangle 103.png"
        alt=""
        width={315}
        height={176}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-[87px] top-[23px] h-[176px] w-[315px]"
      />

      <img
        src="/showcase/Ellipse 55.png"
        alt=""
        width={22}
        height={22}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-[29px] top-[7px] h-[22px] w-[22px]"
      />

      <img
        src="/showcase/Group 131.png"
        alt=""
        width={57}
        height={57}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-[216px] top-[83px] h-[57px] w-[57px]"
      />

      <img
        src="/talents/Group 132 (2).png"
        alt=""
        width={191}
        height={191}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-[324px] top-[144px] h-[191px] w-[191px] max-w-none"
      />

      <div className="absolute left-0 top-[235px] h-[73px] w-[352px] rounded-[36.5px] border border-[#F6F4FF] bg-white shadow-[14px_10px_30px_0px_rgba(49,89,211,0.12)]">
        <img
          src="/talents/Group.png"
          alt=""
          width={53}
          height={53}
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-[10px] top-[10px] h-[53px] w-[53px] rounded-full border-4 border-[#FFC83D] bg-white"
        />

        <div className="absolute left-[71px] top-[10px]">
          <p className="text-xs font-semibold leading-[18px] text-[#1E3E85]">
            Past Client Feedback
          </p>
          <p className="text-[17px] font-medium leading-6 text-global-ink">
            Best Developer Ever!
          </p>
        </div>
      </div>

      <div className="absolute left-[87px] top-[344px] flex w-[315px] flex-wrap gap-x-3 gap-y-2">
        {TALENT_TAGS.map(({ label, width }) => (
          <span
            key={label}
            style={{ width }}
            className="flex h-8 items-center justify-center rounded-[12px] bg-[#F2F3FF] text-xs font-medium leading-[21px] text-[#285EA7]"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ShowcaseArtwork;
