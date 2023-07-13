import React from "react";
import AdminLayout from "../page";
import Card from "@live-component/Card";
import { EditIcon, TrashIcon } from "@live-config/images";

const UserManagement = () => {
  return (
    <AdminLayout>
      <h3 className="text-xl font-bold text-gray-400 my-5">
        Dashboard/Users Management
      </h3>
      <Card>
        <p className="text-sm text-slate-900">20 Record Found</p>
        <>
          {/* component */}
          <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Id user
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Full Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900 text-center"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                        Design
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">Product Designer</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                        Design
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                        Design
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-4">
                      <a x-data="{ tooltip: 'Delete' }" href="#">
                        <EditIcon />
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href="#">
                        <TrashIcon />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      </Card>
    </AdminLayout>
  );
};

export default UserManagement;
