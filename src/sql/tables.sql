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

-- TODO insert //public.profiles (
CREATE TABLE profiles ( 
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  phone_number VARCHAR(20),
  email VARCHAR(255) NOT NULL UNIQUE,
  games_played INTEGER DEFAULT 0,
  high_score INTEGER DEFAULT 0,
  current_tier VARCHAR(50) DEFAULT 'Beginner',
  -- created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  -- updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);