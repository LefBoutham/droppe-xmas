import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";

const data =
  '[{"id":1,"userId":1,"date":"2020-03-02T00:00:02.000Z","products":[{"productId":1,"quantity":4},{"productId":2,"quantity":1},{"productId":3,"quantity":6}],"__v":0},{"id":2,"userId":1,"date":"2020-01-02T00:00:02.000Z","products":[{"productId":2,"quantity":4},{"productId":1,"quantity":10},{"productId":5,"quantity":2}],"__v":0},{"id":3,"userId":2,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":1,"quantity":2},{"productId":9,"quantity":1}],"__v":0},{"id":4,"userId":3,"date":"2020-01-01T00:00:02.000Z","products":[{"productId":1,"quantity":4}],"__v":0},{"id":5,"userId":3,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":7,"quantity":1},{"productId":8,"quantity":1}],"__v":0}]';
const jsonData = JSON.parse(data);

const server = setupServer(
  rest.get("/api/testing", (req, res, ctx) => {
    return res(ctx.json(jsonData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Home", () => {
  it("renders wishlists", () => {
    render(<Home />);

    const monica = screen.getByText("Monica's wishlist");
    const rachel = screen.getByText("Rachel's wishlist");
    const joey = screen.getByText("Joey's wishlist");
    const chandler = screen.getByText("Chandler's wishlist");
    const ross = screen.getByText("Ross's wishlist");

    expect(monica).toBeInTheDocument();
    expect(rachel).toBeInTheDocument();
    expect(joey).toBeInTheDocument();
    expect(chandler).toBeInTheDocument();
    expect(ross).toBeInTheDocument();
  });
});
