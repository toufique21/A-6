"use client";

import { useState } from "react";
import { Workout } from "@/Types/workout";
import PlanWorkoutCard from "./PlanWorkoutCard";

interface PlanTabsProps {
    plan: Workout[];
    saved: Workout[];
}

const PlanTabs = ({ plan, saved }: PlanTabsProps) => {
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    return (
        <section className="mt-10">

            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-700 pb-3">
                <button
                    onClick={() => setActiveTab("plan")}
                    className={`px-4 py-2 ${activeTab === "plan"
                            ? "bg-[#ccff00] text-black"
                            : "text-white"
                        }`}
                >
                    Today's Plan ({plan.length})
                </button>

                <button
                    onClick={() => setActiveTab("saved")}
                    className={`px-4 py-2 ${activeTab === "saved"
                            ? "bg-[#ccff00] text-black"
                            : "text-white"
                        }`}
                >
                    Saved ({saved.length})
                </button>
            </div>

            {/* Content */}
            <div className="mt-6">
                {activeTab === "plan" ? (
                    <div>
                        {plan.length === 0 ? (
                            <p className="text-white">Nothing in today's plan yet.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {plan.map((workout) => (
                                    <PlanWorkoutCard
                                        key={workout.id}
                                        workout={workout}
                                        type="plan"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        {saved.length === 0 ? (
                            <p className="text-white">No saved workouts yet.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {saved.map((workout) => (
                                    <PlanWorkoutCard
                                        key={workout.id}
                                        workout={workout}
                                        type="saved"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

        </section>
    );
};

export default PlanTabs;