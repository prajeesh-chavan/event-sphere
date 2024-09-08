import BlurFade from "../magicui/blur-fade";
import SearchBar from "../SearchBar";

export const BrowseEvents = () => {
  return (
    <section
      className="flex flex-col items-center gap-6 h-screen"
      id="search-event"
    >
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl pt-28 font-bold text-center ">
        <BlurFade delay={0.25} inView>
          Engage Your Curiosity
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          Discover Events Near You!
        </BlurFade>
      </h1>

      <SearchBar />
      <img
        src="/undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_search_engines_041x_-2-_cl95_o7o8_pigd_-1-_wbm3_t5p8_-1-_mt5l_-2-_dhxr_-2-_nmxe.svg"
        className="mt-6 w-4/5 md:w-2/6"
      />
    </section>
  );
};
