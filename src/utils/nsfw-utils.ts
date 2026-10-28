import type { NsfwMode } from "@/types/nsfw";
import type { VndbUlistEntry } from "@/types/vndb";

// VNDB 使用的 NSFW 违禁词，按需增删。
const NSFW_KEYWORDS = [
	"Hentai",
	"Ecchi",
	"えっち",
	"エッチ",
	"NSFW",
	"R18",
	"R-18",
	"18禁",
	"黄油",
	"卖肉",
	"成人",
	"成人向け",
	"エロ",
];

export function isVndbNsfw(item: VndbUlistEntry): boolean {
	const img = item.vn?.image;
	// VNDB 以自带图片评分为权威信号，共用词表作为标签补充
	return (
		(img?.sexual ?? 0) > 1 ||
		(img?.violence ?? 0) > 1 ||
		(item.vn?.tags ?? []).some((t) => NSFW_KEYWORDS.includes(t.name))
	);
}

// mode === "hide" 时过滤掉 NSFW 条目
export function filterNsfw<T>(
	items: T[],
	mode: NsfwMode,
	isNsfw: (x: T) => boolean,
): T[] {
	return mode === "hide" ? items.filter((x) => !isNsfw(x)) : items;
}
