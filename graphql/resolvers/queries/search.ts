import TodoModel from "@/mongoose/model/todo";

export const search = async (_: unknown, { term }: { term: String }) => {
  try {
    const results = await TodoModel.find({
      $or: [
        {
          description: { $regex: term, $options: "i" },
        },
        {
          taskName: { $regex: term, $options: "i" },
        },
      ],
    });
    return results;
  } catch (error) {
    throw new Error(`${error}`);
  }
};