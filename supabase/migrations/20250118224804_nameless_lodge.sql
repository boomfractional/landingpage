/*
  # Add Dynamic Project Management

  1. New Tables
    - `projects` table for storing project details
      - `id` (uuid, primary key)
      - `name` (text)
      - `location` (text)
      - `status` (text)
      - `target_amount` (numeric)
      - `raised_amount` (numeric)
      - `investor_count` (integer)
      - `deadline` (timestamptz)
      - `progress` (integer)
      - `created_at` (timestamptz)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on projects table
    - Add policies for CRUD operations
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  status text DEFAULT 'Active',
  target_amount numeric NOT NULL,
  raised_amount numeric DEFAULT 0,
  investor_count integer DEFAULT 0,
  deadline timestamptz NOT NULL,
  progress integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow users to read all projects
CREATE POLICY "Anyone can read projects" ON projects
  FOR SELECT USING (true);

-- Allow authenticated users to create projects
CREATE POLICY "Users can create projects" ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own projects
CREATE POLICY "Users can update own projects" ON projects
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own projects
CREATE POLICY "Users can delete own projects" ON projects
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);