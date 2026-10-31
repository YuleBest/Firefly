/**
 * 字体配置（统一入口）
 *
 * 正文使用本地 Google Sans Flex，代码块使用本地 JetBrains Mono，
 * 均在 src/styles 中通过 @font-face 引入。Astro Font API 保持关闭。
 * 如需恢复 Astro Font API 自定义字体：
 * 1. 在 fontsList 中添加 Astro Font API 字体定义
 * 2. 将 fontConfig.enable 设为 true
 * 3. 在 fontConfig.selected 或区域字段中引用对应的 cssVariable
 */
import type { FontDefinition, FontSelectionConfig } from "@/types/fontConfig";

// 未配置自定义字体，Astro Font API 不会加载任何字体文件
export const fontsList: FontDefinition[] = [];

export const fontConfig: FontSelectionConfig = {
	// 关闭自定义字体，全部使用系统字体
	enable: false,
	// "system" 表示系统字体（不加载任何自定义字体）
	selected: ["system"],

	// 各区域字体留空，跟随正文系统字体
	bannerTitleFont: "",
	bannerSubtitleFont: "",
	navbarTitleFont: "",
	// 代码块字体留空，FontSetup 会回退到系统等宽字体栈
	codeFont: "",
};
