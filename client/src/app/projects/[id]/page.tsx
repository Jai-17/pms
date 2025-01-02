"use client"

import React, { useState } from 'react'
import ProjectHeader from '../ProjectHeader';
import { useParams } from 'next/navigation';
import Board from '../BoardView';
import List from '../ListView';

const Project = () => {
    const { id } = useParams() as { id: string };
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      {/* MODAL NEW TASK */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (<Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />)}
      {activeTab === "List" && (<List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />)}
    </div>
  )
}

export default Project