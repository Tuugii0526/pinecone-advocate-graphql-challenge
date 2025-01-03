import { getTaskByPriority } from "@/graphql/resolvers/queries/get-tasks-by-priority";
jest.mock("../../mongoose/model/todo", () => ({
  TodoModel: {
    find: jest.fn().mockResolvedValue([
      {
        _id: "1",
        taskName: "name",
        description: "des",
        isDone: false,
        priority: 2,
        tags: ["hiking"],
        createdAt: 34,
        updatedAt: 45,
      },
    ]),
  },
}));
describe("Should update a task", () => {
  it("update a task", async () => {
    const tasks = await getTaskByPriority(null, { priority: "1" });
    expect(tasks).toEqual([
      {
        _id: "1",
        taskName: "name",
        description: "des",
        isDone: false,
        priority: 2,
        tags: ["hiking"],
        createdAt: 34,
        updatedAt: 45,
      },
    ]);
  });
});
