import { useState, useEffect } from "react";
import { getPlans, Plan } from "../services/get-plans.service";

export function usePlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await getPlans();
        setPlans(response.list);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los planes");
        console.error(err);
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return { plans, loading, error };
}
