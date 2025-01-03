/*
  # Developer Dashboard Schema

  1. New Tables
    - developer_projects
      - All project details including funding status
    - project_prospects
      - Track potential investors and their status
    - project_documents
      - Store document metadata for each project
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated developers
*/

-- Developer Projects table
CREATE TABLE IF NOT EXISTS developer_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  developer_id uuid REFERENCES auth.users(id),
  name text NOT NULL,
  location text NOT NULL,
  target_amount numeric NOT NULL,
  raised_amount numeric DEFAULT 0,
  investor_count int DEFAULT 0,
  deadline timestamptz,
  status text DEFAULT 'planning',
  progress int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE developer_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Developers can manage their projects"
  ON developer_projects
  FOR ALL
  TO authenticated
  USING (auth.uid() = developer_id);

-- Project Prospects table
CREATE TABLE IF NOT EXISTS project_prospects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES developer_projects(id),
  name text NOT NULL,
  type text,
  profile text,
  portfolio text,
  document_count int DEFAULT 0,
  commitment numeric,
  contribution numeric DEFAULT 0,
  contribution_date timestamptz,
  status text DEFAULT 'started',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE project_prospects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Developers can manage their prospects"
  ON project_prospects
  FOR ALL
  TO authenticated
  USING (
    project_id IN (
      SELECT id FROM developer_projects 
      WHERE developer_id = auth.uid()
    )
  );

-- Project Documents table
CREATE TABLE IF NOT EXISTS project_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES developer_projects(id),
  name text NOT NULL,
  type text NOT NULL,
  size int NOT NULL,
  status text DEFAULT 'pending',
  uploaded_at timestamptz DEFAULT now()
);

ALTER TABLE project_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Developers can manage their documents"
  ON project_documents
  FOR ALL
  TO authenticated
  USING (
    project_id IN (
      SELECT id FROM developer_projects 
      WHERE developer_id = auth.uid()
    )
  );