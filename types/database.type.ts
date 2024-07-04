export interface Database {
    public: {
      Tables: {
        task_cards: {
          Row: {
            id: string | null
            title: string | null
            description: string | null
          }
          Insert: {
            id: string | null
            title: string | null
            description: string | null
          }
          Update: {
            id: string | null
            title: string | null
            description: string | null
          }
        },
        dashboard_columns: {
          Row: {
            id: string | null
            title: string | null
          }
          Insert: {
            id: string | null
            title: string | null
          }
          Update: {
            id: string | null
            title: string | null
          }
        }
      }
    }
  }