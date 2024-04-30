export default Page;

import { MainPageHero } from "../../components/hero/MainPageHero";
import { MainPageFeatures } from "../../components/features/MainPageFeatures";
import { MainPageFooter } from "../../components/footer/MainPageFooter";

function Page() {
	return (
		<>
			<MainPageHero />
			<MainPageFeatures />
			<MainPageFooter />
		</>
	);
}
