/*
  # Initial Schema Setup

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text)
      - first_name (text)
      - last_name (text)
      - created_at (timestamp)
    
    - properties
      - id (uuid, primary key)
      - name (text)
      - location (text)
      - price (numeric)
      - roi (numeric)
      - description (text)
      - bedrooms (int)
      - bathrooms (int)
      - area (numeric)
      - monthly_taxes (numeric)
      - hoa_fees (numeric)
      - image_url (text)
      - status (text)
      - created_at (timestamp)

    - investments
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - property_id (uuid, references properties)
      - amount (numeric)
      - shares (numeric)
      - status (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  first_name text,
  last_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Properties table
CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  price numeric NOT NULL,
  roi numeric NOT NULL,
  description text,
  bedrooms int,
  bathrooms int,
  area numeric,
  monthly_taxes numeric,
  hoa_fees numeric,
  image_url text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read properties"
  ON properties
  FOR SELECT
  TO authenticated
  USING (true);

-- Investments table
CREATE TABLE IF NOT EXISTS investments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  property_id uuid REFERENCES properties(id),
  amount numeric NOT NULL,
  shares numeric NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE investments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own investments"
  ON investments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create investments"
  ON investments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);