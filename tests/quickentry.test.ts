import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { QuickEntry } from "../Obsidian-Tasks-Timeline/src/components/dateview";

function setRef(ref: React.RefObject<unknown>, value: unknown) {
	(ref as any).current = value;
}

function renderAddButton(entry: QuickEntry, select = "Inbox.md", handleCreateNewTask = vi.fn()) {
	const root = entry.render() as React.ReactElement;
	const rightPanel = (root.props as any).children[1] as React.ReactElement;
	const userOptionConsumer = (rightPanel.props as any).children as React.ReactElement;
	const quickEntryConsumer = (userOptionConsumer.props as any).children({ select }) as React.ReactElement;
	const button = (quickEntryConsumer.props as any).children({ handleCreateNewTask }) as React.ReactElement;

	return { button, handleCreateNewTask };
}

describe("QuickEntry", () => {
	it("submits the configured note when the add button is clicked", async () => {
		const entry = new QuickEntry({});
		const input = { value: "New task", focus: vi.fn() };
		const focusNewTaskInput = vi.spyOn(entry, "focusNewTaskInput").mockImplementation(() => { });
		setRef((entry as any).textInput, input);
		const { button, handleCreateNewTask } = renderAddButton(entry, "Inbox.md");

		await (button.props as any).onClick();

		expect(handleCreateNewTask).toHaveBeenCalledWith("Inbox.md", "New task");
		expect(input.value).toBe("");
		expect(focusNewTaskInput).toHaveBeenCalled();
	});

	it("does not submit blank or one-character entries", async () => {
		const entry = new QuickEntry({});
		const input = { value: "a", focus: vi.fn() };
		const focusNewTaskInput = vi.spyOn(entry, "focusNewTaskInput").mockImplementation(() => { });
		setRef((entry as any).textInput, input);
		const { button, handleCreateNewTask } = renderAddButton(entry, "Inbox.md");

		await (button.props as any).onClick();

		expect(handleCreateNewTask).not.toHaveBeenCalled();
		expect(input.value).toBe("a");
		expect(focusNewTaskInput).toHaveBeenCalled();
	});

	it("uses the add button when Enter is pressed in the input", () => {
		const entry = new QuickEntry({});
		const click = vi.fn();
		setRef((entry as any).okButton, { click });

		entry.onQuickEntryNewTaskKeyUp({ key: "Enter" } as React.KeyboardEvent<HTMLInputElement>);

		expect(click).toHaveBeenCalledOnce();
	});

	it("ignores non-Enter keys in the input", () => {
		const entry = new QuickEntry({});
		const click = vi.fn();
		setRef((entry as any).okButton, { click });

		entry.onQuickEntryNewTaskKeyUp({ key: "Escape" } as React.KeyboardEvent<HTMLInputElement>);

		expect(click).not.toHaveBeenCalled();
	});
});
