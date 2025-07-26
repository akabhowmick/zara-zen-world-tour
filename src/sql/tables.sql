CREATE TABLE chapters (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  published_at DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255),
  -- traits TEXT[],
);

CREATE TABLE trivia_questions (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  -- options TEXT[] NOT NULL,
  correct_answer INTEGER NOT NULL,
  explanation TEXT,
);